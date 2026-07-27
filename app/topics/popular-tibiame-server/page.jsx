import PopularTibiameServerKeywordPage, { generateMetadata } from './popular-tibiame-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameServerKeywordPage />;
}
