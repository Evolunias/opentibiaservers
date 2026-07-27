import PopularTibiameOtKeywordPage, { generateMetadata } from './popular-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameOtKeywordPage />;
}
