import PopularKasteriaOtServerKeywordPage, { generateMetadata } from './popular-kasteria-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaOtServerKeywordPage />;
}
