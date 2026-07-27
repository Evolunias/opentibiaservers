import TopCoxaotOtKeywordPage, { generateMetadata } from './top-coxaot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopCoxaotOtKeywordPage />;
}
