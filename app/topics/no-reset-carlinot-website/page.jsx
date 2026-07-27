import NoResetCarlinotWebsiteKeywordPage, { generateMetadata } from './no-reset-carlinot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetCarlinotWebsiteKeywordPage />;
}
