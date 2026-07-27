import LowrateTibiaraWebsiteKeywordPage, { generateMetadata } from './lowrate-tibiara-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiaraWebsiteKeywordPage />;
}
