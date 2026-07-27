import CustomEmpirebrOfficialKeywordPage, { generateMetadata } from './custom-empirebr-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrOfficialKeywordPage />;
}
