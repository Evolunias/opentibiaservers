import Archlight86RetroServerKeywordPage, { generateMetadata } from './archlight-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight86RetroServerKeywordPage />;
}
