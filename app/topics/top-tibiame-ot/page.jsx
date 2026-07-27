import TopTibiameOtKeywordPage, { generateMetadata } from './top-tibiame-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameOtKeywordPage />;
}
