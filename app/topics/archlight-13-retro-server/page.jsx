import Archlight13RetroServerKeywordPage, { generateMetadata } from './archlight-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight13RetroServerKeywordPage />;
}
