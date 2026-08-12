import ExodusOtServerReviewPage, { generateMetadata } from './exodus-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ExodusOtServerReviewPage />;
}
