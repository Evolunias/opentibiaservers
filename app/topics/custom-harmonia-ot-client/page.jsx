import CustomHarmoniaOtClientKeywordPage, { generateMetadata } from './custom-harmonia-ot-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtClientKeywordPage />;
}
