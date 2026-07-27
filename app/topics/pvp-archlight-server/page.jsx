import PvpArchlightServerKeywordPage, { generateMetadata } from './pvp-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PvpArchlightServerKeywordPage />;
}
