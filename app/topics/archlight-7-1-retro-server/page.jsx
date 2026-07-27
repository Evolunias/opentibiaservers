import Archlight71RetroServerKeywordPage, { generateMetadata } from './archlight-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight71RetroServerKeywordPage />;
}
