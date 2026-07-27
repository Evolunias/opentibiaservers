import BestTibiameTibiaKeywordPage, { generateMetadata } from './best-tibiame-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameTibiaKeywordPage />;
}
