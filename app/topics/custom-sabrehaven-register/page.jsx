import CustomSabrehavenRegisterKeywordPage, { generateMetadata } from './custom-sabrehaven-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomSabrehavenRegisterKeywordPage />;
}
