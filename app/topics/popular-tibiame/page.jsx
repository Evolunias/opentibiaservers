import PopularTibiameKeywordPage, { generateMetadata } from './popular-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameKeywordPage />;
}
