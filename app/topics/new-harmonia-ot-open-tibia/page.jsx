import NewHarmoniaOtOpenTibiaKeywordPage, { generateMetadata } from './new-harmonia-ot-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewHarmoniaOtOpenTibiaKeywordPage />;
}
