import PopularAmeriaLoginKeywordPage, { generateMetadata } from './popular-ameria-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaLoginKeywordPage />;
}
