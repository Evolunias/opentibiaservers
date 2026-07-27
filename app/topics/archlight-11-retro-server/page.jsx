import Archlight11RetroServerKeywordPage, { generateMetadata } from './archlight-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Archlight11RetroServerKeywordPage />;
}
