import OfficialArchlightServerKeywordPage, { generateMetadata } from './official-archlight-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightServerKeywordPage />;
}
