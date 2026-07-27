import NoResetThaisotOtKeywordPage, { generateMetadata } from './no-reset-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotOtKeywordPage />;
}
