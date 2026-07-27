import BestTibia100ServerKeywordPage, { generateMetadata } from './best-tibia-10-0-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia100ServerKeywordPage />;
}
