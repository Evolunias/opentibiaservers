import InfernalOtAlternativesKeywordPage, { generateMetadata } from './infernal-ot-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <InfernalOtAlternativesKeywordPage />;
}
