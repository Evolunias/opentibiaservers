import PopularTibijkaOtKeywordPage, { generateMetadata } from './popular-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaOtKeywordPage />;
}
