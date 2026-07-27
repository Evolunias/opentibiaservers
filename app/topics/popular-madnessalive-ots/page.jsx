import PopularMadnessaliveOtsKeywordPage, { generateMetadata } from './popular-madnessalive-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMadnessaliveOtsKeywordPage />;
}
