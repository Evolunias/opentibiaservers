import FreshStartMediviaOtKeywordPage, { generateMetadata } from './fresh-start-medivia-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaOtKeywordPage />;
}
