import ArcaniarlRetroServerUkKeywordPage, { generateMetadata } from './arcaniarl-retro-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ArcaniarlRetroServerUkKeywordPage />;
}
