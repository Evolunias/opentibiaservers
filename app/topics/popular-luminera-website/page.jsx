import PopularLumineraWebsiteKeywordPage, { generateMetadata } from './popular-luminera-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularLumineraWebsiteKeywordPage />;
}
