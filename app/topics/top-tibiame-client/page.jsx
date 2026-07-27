import TopTibiameClientKeywordPage, { generateMetadata } from './top-tibiame-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameClientKeywordPage />;
}
