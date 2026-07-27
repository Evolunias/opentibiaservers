import NoResetThaisotOtServerKeywordPage, { generateMetadata } from './no-reset-thaisot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotOtServerKeywordPage />;
}
