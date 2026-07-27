import PopularAmeriaServerKeywordPage, { generateMetadata } from './popular-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaServerKeywordPage />;
}
