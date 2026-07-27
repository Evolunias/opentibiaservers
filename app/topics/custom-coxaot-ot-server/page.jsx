import CustomCoxaotOtServerKeywordPage, { generateMetadata } from './custom-coxaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CustomCoxaotOtServerKeywordPage />;
}
