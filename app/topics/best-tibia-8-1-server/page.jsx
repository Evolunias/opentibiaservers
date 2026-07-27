import BestTibia81ServerKeywordPage, { generateMetadata } from './best-tibia-8-1-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia81ServerKeywordPage />;
}
