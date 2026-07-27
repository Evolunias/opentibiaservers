import BestTibia84ServerKeywordPage, { generateMetadata } from './best-tibia-8-4-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia84ServerKeywordPage />;
}
