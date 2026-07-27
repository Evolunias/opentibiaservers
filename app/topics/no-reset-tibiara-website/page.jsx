import NoResetTibiaraWebsiteKeywordPage, { generateMetadata } from './no-reset-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetTibiaraWebsiteKeywordPage />;
}
