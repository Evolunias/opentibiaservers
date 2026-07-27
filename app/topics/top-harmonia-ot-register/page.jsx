import TopHarmoniaOtRegisterKeywordPage, { generateMetadata } from './top-harmonia-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopHarmoniaOtRegisterKeywordPage />;
}
