import NoResetNilotWebsiteKeywordPage, { generateMetadata } from './no-reset-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NoResetNilotWebsiteKeywordPage />;
}
