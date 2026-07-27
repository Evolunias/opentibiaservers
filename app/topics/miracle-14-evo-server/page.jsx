import Miracle14EvoServerKeywordPage, { generateMetadata } from './miracle-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle14EvoServerKeywordPage />;
}
