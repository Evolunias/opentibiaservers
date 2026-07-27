import TopCoxaotOtsKeywordPage, { generateMetadata } from './top-coxaot-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotOtsKeywordPage />;
}
