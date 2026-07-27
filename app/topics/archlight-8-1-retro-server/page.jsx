import Archlight81RetroServerKeywordPage, { generateMetadata } from './archlight-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight81RetroServerKeywordPage />;
}
