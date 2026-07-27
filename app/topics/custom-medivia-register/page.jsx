import CustomMediviaRegisterKeywordPage, { generateMetadata } from './custom-medivia-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomMediviaRegisterKeywordPage />;
}
