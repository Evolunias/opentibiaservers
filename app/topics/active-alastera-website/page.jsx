import ActiveAlasteraWebsiteKeywordPage, { generateMetadata } from './active-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ActiveAlasteraWebsiteKeywordPage />;
}
