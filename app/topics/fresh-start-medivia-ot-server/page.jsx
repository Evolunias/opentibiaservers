import FreshStartMediviaOtServerKeywordPage, { generateMetadata } from './fresh-start-medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FreshStartMediviaOtServerKeywordPage />;
}
