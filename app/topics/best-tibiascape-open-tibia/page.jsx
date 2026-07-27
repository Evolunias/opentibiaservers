import BestTibiascapeOpenTibiaKeywordPage, { generateMetadata } from './best-tibiascape-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiascapeOpenTibiaKeywordPage />;
}
