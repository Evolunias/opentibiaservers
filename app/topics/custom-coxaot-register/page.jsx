import CustomCoxaotRegisterKeywordPage, { generateMetadata } from './custom-coxaot-register';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotRegisterKeywordPage />;
}
