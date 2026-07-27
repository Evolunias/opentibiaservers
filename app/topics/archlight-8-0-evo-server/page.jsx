import Archlight80EvoServerKeywordPage, { generateMetadata } from './archlight-8-0-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight80EvoServerKeywordPage />;
}
