import RetroArchlightServerKeywordPage, { generateMetadata } from './retro-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RetroArchlightServerKeywordPage />;
}
