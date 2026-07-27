import MediviaLowExpServerBrazilKeywordPage, { generateMetadata } from './medivia-low-exp-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaLowExpServerBrazilKeywordPage />;
}
