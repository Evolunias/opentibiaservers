import BestTibia12ServerKeywordPage, { generateMetadata } from './best-tibia-12-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia12ServerKeywordPage />;
}
