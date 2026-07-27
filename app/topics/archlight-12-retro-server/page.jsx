import Archlight12RetroServerKeywordPage, { generateMetadata } from './archlight-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight12RetroServerKeywordPage />;
}
