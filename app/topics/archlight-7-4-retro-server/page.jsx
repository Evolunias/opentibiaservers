import Archlight74RetroServerKeywordPage, { generateMetadata } from './archlight-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight74RetroServerKeywordPage />;
}
