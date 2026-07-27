import TopTibijkaClientKeywordPage, { generateMetadata } from './top-tibijka-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaClientKeywordPage />;
}
