import Archlight12EvoServerKeywordPage, { generateMetadata } from './archlight-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12EvoServerKeywordPage />;
}
