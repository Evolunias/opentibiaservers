import PopularKasteriaOtKeywordPage, { generateMetadata } from './popular-kasteria-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularKasteriaOtKeywordPage />;
}
