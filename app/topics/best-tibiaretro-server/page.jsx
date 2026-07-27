import BestTibiaretroServerKeywordPage, { generateMetadata } from './best-tibiaretro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroServerKeywordPage />;
}
