import NoResetArchlightClientKeywordPage, { generateMetadata } from './no-reset-archlight-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightClientKeywordPage />;
}
