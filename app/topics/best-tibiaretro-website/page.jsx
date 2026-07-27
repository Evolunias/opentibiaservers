import BestTibiaretroWebsiteKeywordPage, { generateMetadata } from './best-tibiaretro-website';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <BestTibiaretroWebsiteKeywordPage />;
}
