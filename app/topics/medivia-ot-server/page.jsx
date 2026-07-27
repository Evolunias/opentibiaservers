import MediviaOtServerKeywordPage, { generateMetadata } from './medivia-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaOtServerKeywordPage />;
}
