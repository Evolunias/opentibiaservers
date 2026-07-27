import MediviaLowExpServerMexicoKeywordPage, { generateMetadata } from './medivia-low-exp-server-mexico';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaLowExpServerMexicoKeywordPage />;
}
