import TopTibiascapeLoginKeywordPage, { generateMetadata } from './top-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiascapeLoginKeywordPage />;
}
