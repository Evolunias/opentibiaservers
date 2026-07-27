import BestTibiaretroKeywordPage, { generateMetadata } from './best-tibiaretro';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroKeywordPage />;
}
