import NoResetArchlightOtsKeywordPage, { generateMetadata } from './no-reset-archlight-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightOtsKeywordPage />;
}
