import PopularTibijkaLoginKeywordPage, { generateMetadata } from './popular-tibijka-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibijkaLoginKeywordPage />;
}
