import TopTibijkaOtsKeywordPage, { generateMetadata } from './top-tibijka-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaOtsKeywordPage />;
}
