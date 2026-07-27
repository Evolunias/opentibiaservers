import HighrateCoxaotOtServerKeywordPage, { generateMetadata } from './highrate-coxaot-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotOtServerKeywordPage />;
}
