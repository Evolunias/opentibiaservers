import CustomHarmoniaOtServerKeywordPage, { generateMetadata } from './custom-harmonia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtServerKeywordPage />;
}
