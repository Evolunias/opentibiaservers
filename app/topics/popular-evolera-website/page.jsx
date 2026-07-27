import PopularEvoleraWebsiteKeywordPage, { generateMetadata } from './popular-evolera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularEvoleraWebsiteKeywordPage />;
}
