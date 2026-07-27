import OlderaLatinAmericaServerKeywordPage, { generateMetadata } from './oldera-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaLatinAmericaServerKeywordPage />;
}
