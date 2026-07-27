import FreshStartMediviaOtsKeywordPage, { generateMetadata } from './fresh-start-medivia-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaOtsKeywordPage />;
}
