import TopTibiameServerKeywordPage, { generateMetadata } from './top-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameServerKeywordPage />;
}
