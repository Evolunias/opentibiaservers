import NoResetKasteriaWebsiteKeywordPage, { generateMetadata } from './no-reset-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetKasteriaWebsiteKeywordPage />;
}
