import CustomCoxaotOtsKeywordPage, { generateMetadata } from './custom-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotOtsKeywordPage />;
}
