import PopularTibiameLoginKeywordPage, { generateMetadata } from './popular-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameLoginKeywordPage />;
}
