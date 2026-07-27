import MediviaLowExpServerEuropeKeywordPage, { generateMetadata } from './medivia-low-exp-server-europe';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaLowExpServerEuropeKeywordPage />;
}
