import Miracle15EvoServerKeywordPage, { generateMetadata } from './miracle-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle15EvoServerKeywordPage />;
}
