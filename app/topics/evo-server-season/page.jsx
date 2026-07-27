import EvoServerSeasonKeywordPage, { generateMetadata } from './evo-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServerSeasonKeywordPage />;
}
