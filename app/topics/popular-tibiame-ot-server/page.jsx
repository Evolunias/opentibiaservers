import PopularTibiameOtServerKeywordPage, { generateMetadata } from './popular-tibiame-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameOtServerKeywordPage />;
}
