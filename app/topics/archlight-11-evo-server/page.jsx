import Archlight11EvoServerKeywordPage, { generateMetadata } from './archlight-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11EvoServerKeywordPage />;
}
