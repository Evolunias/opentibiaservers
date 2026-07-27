import KasteriaRetroServerGermanyKeywordPage, { generateMetadata } from './kasteria-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <KasteriaRetroServerGermanyKeywordPage />;
}
