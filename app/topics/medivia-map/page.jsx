import MediviaMapKeywordPage, { generateMetadata } from './medivia-map';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaMapKeywordPage />;
}
