import NewTibiaraWebsiteKeywordPage, { generateMetadata } from './new-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewTibiaraWebsiteKeywordPage />;
}
