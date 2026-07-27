import CurrentArchlightClientKeywordPage, { generateMetadata } from './current-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentArchlightClientKeywordPage />;
}
