import Archlight15EvoServerKeywordPage, { generateMetadata } from './archlight-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight15EvoServerKeywordPage />;
}
