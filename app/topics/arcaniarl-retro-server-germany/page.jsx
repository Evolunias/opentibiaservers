import ArcaniarlRetroServerGermanyKeywordPage, { generateMetadata } from './arcaniarl-retro-server-germany';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRetroServerGermanyKeywordPage />;
}
