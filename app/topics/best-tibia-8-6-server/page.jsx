import BestTibia86ServerKeywordPage, { generateMetadata } from './best-tibia-8-6-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia86ServerKeywordPage />;
}
