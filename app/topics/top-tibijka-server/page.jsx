import TopTibijkaServerKeywordPage, { generateMetadata } from './top-tibijka-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaServerKeywordPage />;
}
