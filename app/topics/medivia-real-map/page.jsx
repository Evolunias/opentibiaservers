import MediviaRealMapKeywordPage, { generateMetadata } from './medivia-real-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaRealMapKeywordPage />;
}
