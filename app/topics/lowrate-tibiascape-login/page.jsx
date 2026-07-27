import LowrateTibiascapeLoginKeywordPage, { generateMetadata } from './lowrate-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowrateTibiascapeLoginKeywordPage />;
}
