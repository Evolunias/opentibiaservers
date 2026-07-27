import PopularHarmoniaOtOpenTibiaKeywordPage, { generateMetadata } from './popular-harmonia-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularHarmoniaOtOpenTibiaKeywordPage />;
}
