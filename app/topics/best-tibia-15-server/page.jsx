import BestTibia15ServerKeywordPage, { generateMetadata } from './best-tibia-15-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia15ServerKeywordPage />;
}
