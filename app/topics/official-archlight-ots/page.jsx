import OfficialArchlightOtsKeywordPage, { generateMetadata } from './official-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightOtsKeywordPage />;
}
