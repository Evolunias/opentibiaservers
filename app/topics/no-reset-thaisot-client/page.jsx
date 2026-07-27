import NoResetThaisotClientKeywordPage, { generateMetadata } from './no-reset-thaisot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotClientKeywordPage />;
}
