import TopArchlightClientKeywordPage, { generateMetadata } from './top-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopArchlightClientKeywordPage />;
}
