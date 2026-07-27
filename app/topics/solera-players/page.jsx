import SoleraPlayersKeywordPage, { generateMetadata } from './solera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <SoleraPlayersKeywordPage />;
}
