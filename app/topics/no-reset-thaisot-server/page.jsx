import NoResetThaisotServerKeywordPage, { generateMetadata } from './no-reset-thaisot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotServerKeywordPage />;
}
