import NovaPlayersKeywordPage, { generateMetadata } from './nova-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NovaPlayersKeywordPage />;
}
