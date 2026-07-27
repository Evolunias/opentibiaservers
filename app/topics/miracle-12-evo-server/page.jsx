import Miracle12EvoServerKeywordPage, { generateMetadata } from './miracle-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle12EvoServerKeywordPage />;
}
