import PopularCanobWebsiteKeywordPage, { generateMetadata } from './popular-canob-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularCanobWebsiteKeywordPage />;
}
