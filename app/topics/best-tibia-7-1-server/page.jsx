import BestTibia71ServerKeywordPage, { generateMetadata } from './best-tibia-7-1-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia71ServerKeywordPage />;
}
