import TopUnlineWebsiteKeywordPage, { generateMetadata } from './top-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopUnlineWebsiteKeywordPage />;
}
