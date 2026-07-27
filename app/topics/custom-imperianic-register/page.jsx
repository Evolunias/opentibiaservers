import CustomImperianicRegisterKeywordPage, { generateMetadata } from './custom-imperianic-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomImperianicRegisterKeywordPage />;
}
