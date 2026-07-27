import CurrentAlasteraWebsiteKeywordPage, { generateMetadata } from './current-alastera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentAlasteraWebsiteKeywordPage />;
}
