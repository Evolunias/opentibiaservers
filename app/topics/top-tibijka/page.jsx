import TopTibijkaKeywordPage, { generateMetadata } from './top-tibijka';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaKeywordPage />;
}
