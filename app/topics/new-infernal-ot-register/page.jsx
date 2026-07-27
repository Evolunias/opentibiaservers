import NewInfernalOtRegisterKeywordPage, { generateMetadata } from './new-infernal-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NewInfernalOtRegisterKeywordPage />;
}
