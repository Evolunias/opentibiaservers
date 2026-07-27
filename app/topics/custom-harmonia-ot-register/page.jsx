import CustomHarmoniaOtRegisterKeywordPage, { generateMetadata } from './custom-harmonia-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtRegisterKeywordPage />;
}
