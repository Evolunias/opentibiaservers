import Archlight14RetroServerKeywordPage, { generateMetadata } from './archlight-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight14RetroServerKeywordPage />;
}
