import PopularTibiameOfficialKeywordPage, { generateMetadata } from './popular-tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameOfficialKeywordPage />;
}
