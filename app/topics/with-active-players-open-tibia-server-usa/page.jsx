import WithActivePlayersOpenTibiaServerUsaKeywordPage, { generateMetadata } from './with-active-players-open-tibia-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOpenTibiaServerUsaKeywordPage />;
}
