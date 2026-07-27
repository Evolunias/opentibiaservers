import EvoleraAlternativesKeywordPage, { generateMetadata } from './evolera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraAlternativesKeywordPage />;
}
