import PopularMadnessaliveKeywordPage, { generateMetadata } from './popular-madnessalive';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveKeywordPage />;
}
