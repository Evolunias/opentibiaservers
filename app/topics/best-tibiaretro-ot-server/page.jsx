import BestTibiaretroOtServerKeywordPage, { generateMetadata } from './best-tibiaretro-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroOtServerKeywordPage />;
}
