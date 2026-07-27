import TopTibiameLoginKeywordPage, { generateMetadata } from './top-tibiame-login';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameLoginKeywordPage />;
}
