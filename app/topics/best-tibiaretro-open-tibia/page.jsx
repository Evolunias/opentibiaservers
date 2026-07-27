import BestTibiaretroOpenTibiaKeywordPage, { generateMetadata } from './best-tibiaretro-open-tibia';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroOpenTibiaKeywordPage />;
}
