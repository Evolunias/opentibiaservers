import PopularOxygenotWebsiteKeywordPage, { generateMetadata } from './popular-oxygenot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularOxygenotWebsiteKeywordPage />;
}
