import PopularUnlineWebsiteKeywordPage, { generateMetadata } from './popular-unline-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularUnlineWebsiteKeywordPage />;
}
