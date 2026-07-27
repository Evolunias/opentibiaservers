import HighrateCoxaotOtKeywordPage, { generateMetadata } from './highrate-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateCoxaotOtKeywordPage />;
}
