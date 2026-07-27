import TopTibiameOfficialKeywordPage, { generateMetadata } from './top-tibiame-official';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameOfficialKeywordPage />;
}
