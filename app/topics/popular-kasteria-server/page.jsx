import PopularKasteriaServerKeywordPage, { generateMetadata } from './popular-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaServerKeywordPage />;
}
