import CurrentTibiaraWebsiteKeywordPage, { generateMetadata } from './current-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentTibiaraWebsiteKeywordPage />;
}
