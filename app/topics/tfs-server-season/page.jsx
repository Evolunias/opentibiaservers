import TfsServerSeasonKeywordPage, { generateMetadata } from './tfs-server-season';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TfsServerSeasonKeywordPage />;
}
