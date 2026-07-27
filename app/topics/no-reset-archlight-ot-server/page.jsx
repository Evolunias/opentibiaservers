import NoResetArchlightOtServerKeywordPage, { generateMetadata } from './no-reset-archlight-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetArchlightOtServerKeywordPage />;
}
