import PopularAmeriaOtServerKeywordPage, { generateMetadata } from './popular-ameria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularAmeriaOtServerKeywordPage />;
}
