import WithActivePlayersOpenTibiaServerPolandKeywordPage, { generateMetadata } from './with-active-players-open-tibia-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOpenTibiaServerPolandKeywordPage />;
}
