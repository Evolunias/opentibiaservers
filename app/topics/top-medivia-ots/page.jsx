import TopMediviaOtsKeywordPage, { generateMetadata } from './top-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaOtsKeywordPage />;
}
