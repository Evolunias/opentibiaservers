import BestTibia76ServerKeywordPage, { generateMetadata } from './best-tibia-7-6-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibia76ServerKeywordPage />;
}
