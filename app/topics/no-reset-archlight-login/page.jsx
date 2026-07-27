import NoResetArchlightLoginKeywordPage, { generateMetadata } from './no-reset-archlight-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightLoginKeywordPage />;
}
