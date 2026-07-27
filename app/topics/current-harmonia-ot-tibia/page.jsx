import CurrentHarmoniaOtTibiaKeywordPage, { generateMetadata } from './current-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtTibiaKeywordPage />;
}
