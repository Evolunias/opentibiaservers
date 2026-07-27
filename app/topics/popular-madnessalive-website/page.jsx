import PopularMadnessaliveWebsiteKeywordPage, { generateMetadata } from './popular-madnessalive-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveWebsiteKeywordPage />;
}
