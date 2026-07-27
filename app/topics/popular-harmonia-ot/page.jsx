import PopularHarmoniaOtKeywordPage, { generateMetadata } from './popular-harmonia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtKeywordPage />;
}
