import Archlight14EvoServerKeywordPage, { generateMetadata } from './archlight-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14EvoServerKeywordPage />;
}
