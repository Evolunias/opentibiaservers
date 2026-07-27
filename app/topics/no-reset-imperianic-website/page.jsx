import NoResetImperianicWebsiteKeywordPage, { generateMetadata } from './no-reset-imperianic-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetImperianicWebsiteKeywordPage />;
}
