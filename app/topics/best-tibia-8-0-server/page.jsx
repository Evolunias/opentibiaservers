import BestTibia80ServerKeywordPage, { generateMetadata } from './best-tibia-8-0-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia80ServerKeywordPage />;
}
