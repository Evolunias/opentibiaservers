import PopularNepreniaOtKeywordPage, { generateMetadata } from './popular-neprenia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaOtKeywordPage />;
}
