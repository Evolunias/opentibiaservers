import CustomHarmoniaOtOtsKeywordPage, { generateMetadata } from './custom-harmonia-ot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtOtsKeywordPage />;
}
