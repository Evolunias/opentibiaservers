import TopThaisotOtKeywordPage, { generateMetadata } from './top-thaisot-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopThaisotOtKeywordPage />;
}
