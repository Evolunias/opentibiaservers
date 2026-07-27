import MiracleSeasonKeywordPage, { generateMetadata } from './miracle-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MiracleSeasonKeywordPage />;
}
