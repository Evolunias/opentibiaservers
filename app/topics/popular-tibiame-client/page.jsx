import PopularTibiameClientKeywordPage, { generateMetadata } from './popular-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameClientKeywordPage />;
}
