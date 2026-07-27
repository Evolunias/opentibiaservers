import TibiaretroSeasonKeywordPage, { generateMetadata } from './tibiaretro-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaretroSeasonKeywordPage />;
}
