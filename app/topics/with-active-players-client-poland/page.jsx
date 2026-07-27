import WithActivePlayersClientPolandKeywordPage, { generateMetadata } from './with-active-players-client-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersClientPolandKeywordPage />;
}
