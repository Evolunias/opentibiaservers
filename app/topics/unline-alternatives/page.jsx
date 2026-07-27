import UnlineAlternativesKeywordPage, { generateMetadata } from './unline-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <UnlineAlternativesKeywordPage />;
}
