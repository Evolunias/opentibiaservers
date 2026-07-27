import LuceraAlternativesKeywordPage, { generateMetadata } from './lucera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LuceraAlternativesKeywordPage />;
}
