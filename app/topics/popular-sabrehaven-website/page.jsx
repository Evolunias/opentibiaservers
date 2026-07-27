import PopularSabrehavenWebsiteKeywordPage, { generateMetadata } from './popular-sabrehaven-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularSabrehavenWebsiteKeywordPage />;
}
