import FideraPlayersKeywordPage, { generateMetadata } from './fidera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <FideraPlayersKeywordPage />;
}
