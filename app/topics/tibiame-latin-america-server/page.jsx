import TibiameLatinAmericaServerKeywordPage, { generateMetadata } from './tibiame-latin-america-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiameLatinAmericaServerKeywordPage />;
}
