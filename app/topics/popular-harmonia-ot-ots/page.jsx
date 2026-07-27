import PopularHarmoniaOtOtsKeywordPage, { generateMetadata } from './popular-harmonia-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtOtsKeywordPage />;
}
