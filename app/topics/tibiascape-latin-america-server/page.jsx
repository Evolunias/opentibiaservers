import TibiascapeLatinAmericaServerKeywordPage, { generateMetadata } from './tibiascape-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLatinAmericaServerKeywordPage />;
}
