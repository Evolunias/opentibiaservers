import BestTibiameOpenTibiaKeywordPage, { generateMetadata } from './best-tibiame-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiameOpenTibiaKeywordPage />;
}
