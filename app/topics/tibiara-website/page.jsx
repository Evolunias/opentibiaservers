import TibiaraWebsiteKeywordPage, { generateMetadata } from './tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaraWebsiteKeywordPage />;
}
