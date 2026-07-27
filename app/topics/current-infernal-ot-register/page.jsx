import CurrentInfernalOtRegisterKeywordPage, { generateMetadata } from './current-infernal-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CurrentInfernalOtRegisterKeywordPage />;
}
