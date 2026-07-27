import BestTibia11ServerKeywordPage, { generateMetadata } from './best-tibia-11-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia11ServerKeywordPage />;
}
