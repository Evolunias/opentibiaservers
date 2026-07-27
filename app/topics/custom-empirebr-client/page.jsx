import CustomEmpirebrClientKeywordPage, { generateMetadata } from './custom-empirebr-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrClientKeywordPage />;
}
