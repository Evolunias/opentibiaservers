import CustomHarmoniaOtOtServerKeywordPage, { generateMetadata } from './custom-harmonia-ot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtOtServerKeywordPage />;
}
