import PopularKasteriaClientKeywordPage, { generateMetadata } from './popular-kasteria-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaClientKeywordPage />;
}
