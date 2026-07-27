import PopularAmeriaOtsKeywordPage, { generateMetadata } from './popular-ameria-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaOtsKeywordPage />;
}
