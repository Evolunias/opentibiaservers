import TopTibiameTibiaKeywordPage, { generateMetadata } from './top-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TopTibiameTibiaKeywordPage />;
}
