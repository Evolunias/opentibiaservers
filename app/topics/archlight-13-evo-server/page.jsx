import Archlight13EvoServerKeywordPage, { generateMetadata } from './archlight-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13EvoServerKeywordPage />;
}
