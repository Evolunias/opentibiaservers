import CustomHarmoniaOtLoginKeywordPage, { generateMetadata } from './custom-harmonia-ot-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomHarmoniaOtLoginKeywordPage />;
}
