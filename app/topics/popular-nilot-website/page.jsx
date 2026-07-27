import PopularNilotWebsiteKeywordPage, { generateMetadata } from './popular-nilot-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNilotWebsiteKeywordPage />;
}
