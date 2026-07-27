import OfficialElderaWebsiteKeywordPage, { generateMetadata } from './official-eldera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialElderaWebsiteKeywordPage />;
}
