import CurrentHarmoniaOtRegisterKeywordPage, { generateMetadata } from './current-harmonia-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentHarmoniaOtRegisterKeywordPage />;
}
