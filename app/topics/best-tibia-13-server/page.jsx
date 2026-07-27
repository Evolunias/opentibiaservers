import BestTibia13ServerKeywordPage, { generateMetadata } from './best-tibia-13-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia13ServerKeywordPage />;
}
