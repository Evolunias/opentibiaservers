import DoleraAlternativesKeywordPage, { generateMetadata } from './dolera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <DoleraAlternativesKeywordPage />;
}
