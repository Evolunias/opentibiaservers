import CustomEmpirebrWebsiteKeywordPage, { generateMetadata } from './custom-empirebr-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomEmpirebrWebsiteKeywordPage />;
}
