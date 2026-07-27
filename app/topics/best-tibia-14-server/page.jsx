import BestTibia14ServerKeywordPage, { generateMetadata } from './best-tibia-14-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia14ServerKeywordPage />;
}
