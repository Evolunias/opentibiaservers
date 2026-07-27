import BestTibiantisTibiaKeywordPage, { generateMetadata } from './best-tibiantis-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiantisTibiaKeywordPage />;
}
