import HighrateTibiaraWebsiteKeywordPage, { generateMetadata } from './highrate-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiaraWebsiteKeywordPage />;
}
