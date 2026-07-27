import NoResetThaisotWebsiteKeywordPage, { generateMetadata } from './no-reset-thaisot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetThaisotWebsiteKeywordPage />;
}
