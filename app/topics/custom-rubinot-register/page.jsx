import CustomRubinotRegisterKeywordPage, { generateMetadata } from './custom-rubinot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomRubinotRegisterKeywordPage />;
}
