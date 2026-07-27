import PopularAmeriaOtKeywordPage, { generateMetadata } from './popular-ameria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaOtKeywordPage />;
}
