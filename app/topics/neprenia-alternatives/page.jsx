import NepreniaAlternativesKeywordPage, { generateMetadata } from './neprenia-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaAlternativesKeywordPage />;
}
