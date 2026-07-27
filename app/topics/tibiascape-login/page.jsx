import TibiascapeLoginKeywordPage, { generateMetadata } from './tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeLoginKeywordPage />;
}
