import HighrateTibiascapeLoginKeywordPage, { generateMetadata } from './highrate-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighrateTibiascapeLoginKeywordPage />;
}
