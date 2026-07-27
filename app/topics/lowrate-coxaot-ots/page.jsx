import LowrateCoxaotOtsKeywordPage, { generateMetadata } from './lowrate-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateCoxaotOtsKeywordPage />;
}
