import PopularMediviaOtsKeywordPage, { generateMetadata } from './popular-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularMediviaOtsKeywordPage />;
}
