import OfficialArchlightClientKeywordPage, { generateMetadata } from './official-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialArchlightClientKeywordPage />;
}
