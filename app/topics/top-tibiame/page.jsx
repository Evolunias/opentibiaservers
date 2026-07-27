import TopTibiameKeywordPage, { generateMetadata } from './top-tibiame';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameKeywordPage />;
}
