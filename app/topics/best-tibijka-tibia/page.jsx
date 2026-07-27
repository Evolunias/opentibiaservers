import BestTibijkaTibiaKeywordPage, { generateMetadata } from './best-tibijka-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaTibiaKeywordPage />;
}
