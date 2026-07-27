import PopularHarmoniaOtClientKeywordPage, { generateMetadata } from './popular-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtClientKeywordPage />;
}
