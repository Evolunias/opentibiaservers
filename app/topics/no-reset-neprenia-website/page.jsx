import NoResetNepreniaWebsiteKeywordPage, { generateMetadata } from './no-reset-neprenia-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNepreniaWebsiteKeywordPage />;
}
