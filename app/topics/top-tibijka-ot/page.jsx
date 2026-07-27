import TopTibijkaOtKeywordPage, { generateMetadata } from './top-tibijka-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaOtKeywordPage />;
}
