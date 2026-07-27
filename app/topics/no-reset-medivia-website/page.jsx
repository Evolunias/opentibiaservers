import NoResetMediviaWebsiteKeywordPage, { generateMetadata } from './no-reset-medivia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetMediviaWebsiteKeywordPage />;
}
