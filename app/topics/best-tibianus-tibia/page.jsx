import BestTibianusTibiaKeywordPage, { generateMetadata } from './best-tibianus-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibianusTibiaKeywordPage />;
}
