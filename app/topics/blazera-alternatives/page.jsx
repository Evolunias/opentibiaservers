import BlazeraAlternativesKeywordPage, { generateMetadata } from './blazera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BlazeraAlternativesKeywordPage />;
}
