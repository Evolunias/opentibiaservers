import PopularKasteriaLoginKeywordPage, { generateMetadata } from './popular-kasteria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaLoginKeywordPage />;
}
