import BestTibiantisOpenTibiaKeywordPage, { generateMetadata } from './best-tibiantis-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisOpenTibiaKeywordPage />;
}
