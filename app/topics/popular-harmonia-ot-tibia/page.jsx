import PopularHarmoniaOtTibiaKeywordPage, { generateMetadata } from './popular-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtTibiaKeywordPage />;
}
