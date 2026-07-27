import TopAlasteraWebsiteKeywordPage, { generateMetadata } from './top-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopAlasteraWebsiteKeywordPage />;
}
