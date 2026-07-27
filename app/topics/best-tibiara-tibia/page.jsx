import BestTibiaraTibiaKeywordPage, { generateMetadata } from './best-tibiara-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaraTibiaKeywordPage />;
}
