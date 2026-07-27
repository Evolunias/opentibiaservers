import OfficialKasteriaWebsiteKeywordPage, { generateMetadata } from './official-kasteria-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialKasteriaWebsiteKeywordPage />;
}
