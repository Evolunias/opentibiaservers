import EvoleraSeasonKeywordPage, { generateMetadata } from './evolera-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoleraSeasonKeywordPage />;
}
