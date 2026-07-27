import BestTibiaretroOtKeywordPage, { generateMetadata } from './best-tibiaretro-ot';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroOtKeywordPage />;
}
