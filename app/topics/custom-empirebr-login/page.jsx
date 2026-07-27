import CustomEmpirebrLoginKeywordPage, { generateMetadata } from './custom-empirebr-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrLoginKeywordPage />;
}
