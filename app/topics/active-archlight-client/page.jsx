import ActiveArchlightClientKeywordPage, { generateMetadata } from './active-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveArchlightClientKeywordPage />;
}
