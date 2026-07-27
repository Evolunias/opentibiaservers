import PopularRealestaLoginKeywordPage, { generateMetadata } from './popular-realesta-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularRealestaLoginKeywordPage />;
}
