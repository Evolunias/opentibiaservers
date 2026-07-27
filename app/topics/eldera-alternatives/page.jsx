import ElderaAlternativesKeywordPage, { generateMetadata } from './eldera-alternatives';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ElderaAlternativesKeywordPage />;
}
