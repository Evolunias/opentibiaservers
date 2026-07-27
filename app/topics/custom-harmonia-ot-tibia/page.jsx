import CustomHarmoniaOtTibiaKeywordPage, { generateMetadata } from './custom-harmonia-ot-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtTibiaKeywordPage />;
}
