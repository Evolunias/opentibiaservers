import CustomHarmoniaOtOtKeywordPage, { generateMetadata } from './custom-harmonia-ot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtOtKeywordPage />;
}
