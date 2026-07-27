import BestTibijkaOpenTibiaKeywordPage, { generateMetadata } from './best-tibijka-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibijkaOpenTibiaKeywordPage />;
}
