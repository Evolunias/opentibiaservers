import PopularClassicusWebsiteKeywordPage, { generateMetadata } from './popular-classicus-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularClassicusWebsiteKeywordPage />;
}
