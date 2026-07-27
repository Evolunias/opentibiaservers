import WithActivePlayersRuthlessChaosServerKeywordPage, { generateMetadata } from './with-active-players-ruthless-chaos-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersRuthlessChaosServerKeywordPage />;
}
