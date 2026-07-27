import CustomCoxaotOfficialKeywordPage, { generateMetadata } from './custom-coxaot-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotOfficialKeywordPage />;
}
