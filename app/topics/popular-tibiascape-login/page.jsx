import PopularTibiascapeLoginKeywordPage, { generateMetadata } from './popular-tibiascape-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiascapeLoginKeywordPage />;
}
