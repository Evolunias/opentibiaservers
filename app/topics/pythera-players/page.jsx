import PytheraPlayersKeywordPage, { generateMetadata } from './pythera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PytheraPlayersKeywordPage />;
}
