import TopTibijkaLoginKeywordPage, { generateMetadata } from './top-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibijkaLoginKeywordPage />;
}
