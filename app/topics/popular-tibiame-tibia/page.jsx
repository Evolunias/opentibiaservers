import PopularTibiameTibiaKeywordPage, { generateMetadata } from './popular-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PopularTibiameTibiaKeywordPage />;
}
