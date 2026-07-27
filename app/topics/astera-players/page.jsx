import AsteraPlayersKeywordPage, { generateMetadata } from './astera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AsteraPlayersKeywordPage />;
}
