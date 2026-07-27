import BestTibia96ServerKeywordPage, { generateMetadata } from './best-tibia-9-6-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia96ServerKeywordPage />;
}
