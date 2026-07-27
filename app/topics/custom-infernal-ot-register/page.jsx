import CustomInfernalOtRegisterKeywordPage, { generateMetadata } from './custom-infernal-ot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomInfernalOtRegisterKeywordPage />;
}
