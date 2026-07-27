import PopularTibijkaOtsKeywordPage, { generateMetadata } from './popular-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaOtsKeywordPage />;
}
