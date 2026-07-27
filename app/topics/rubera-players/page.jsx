import RuberaPlayersKeywordPage, { generateMetadata } from './rubera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RuberaPlayersKeywordPage />;
}
