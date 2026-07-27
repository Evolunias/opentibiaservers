import ReneraPlayersKeywordPage, { generateMetadata } from './renera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ReneraPlayersKeywordPage />;
}
