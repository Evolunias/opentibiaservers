import AldoraPlayersKeywordPage, { generateMetadata } from './aldora-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AldoraPlayersKeywordPage />;
}
