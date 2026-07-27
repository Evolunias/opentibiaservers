import TopSabrehavenWebsiteKeywordPage, { generateMetadata } from './top-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopSabrehavenWebsiteKeywordPage />;
}
