import BestTibiaretroOtsKeywordPage, { generateMetadata } from './best-tibiaretro-ots';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroOtsKeywordPage />;
}
