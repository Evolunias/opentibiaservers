import PopularMadnessaliveClientKeywordPage, { generateMetadata } from './popular-madnessalive-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveClientKeywordPage />;
}
