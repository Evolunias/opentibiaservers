import TopMediviaOtKeywordPage, { generateMetadata } from './top-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopMediviaOtKeywordPage />;
}
