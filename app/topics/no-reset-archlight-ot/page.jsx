import NoResetArchlightOtKeywordPage, { generateMetadata } from './no-reset-archlight-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightOtKeywordPage />;
}
