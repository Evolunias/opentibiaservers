import OfficialAlasteraWebsiteKeywordPage, { generateMetadata } from './official-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OfficialAlasteraWebsiteKeywordPage />;
}
