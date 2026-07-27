import ThorniaLatinAmericaServerKeywordPage, { generateMetadata } from './thornia-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ThorniaLatinAmericaServerKeywordPage />;
}
