import TibiascapeSeasonKeywordPage, { generateMetadata } from './tibiascape-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiascapeSeasonKeywordPage />;
}
