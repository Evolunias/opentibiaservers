import CustomHarmoniaOtOfficialKeywordPage, { generateMetadata } from './custom-harmonia-ot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtOfficialKeywordPage />;
}
