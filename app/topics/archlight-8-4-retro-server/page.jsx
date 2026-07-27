import Archlight84RetroServerKeywordPage, { generateMetadata } from './archlight-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight84RetroServerKeywordPage />;
}
