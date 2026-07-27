import PopularNepreniaOtsKeywordPage, { generateMetadata } from './popular-neprenia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularNepreniaOtsKeywordPage />;
}
