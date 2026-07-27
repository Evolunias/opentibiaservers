import LowrateCoxaotOtKeywordPage, { generateMetadata } from './lowrate-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotOtKeywordPage />;
}
