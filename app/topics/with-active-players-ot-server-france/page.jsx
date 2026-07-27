import WithActivePlayersOtServerFranceKeywordPage, { generateMetadata } from './with-active-players-ot-server-france';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOtServerFranceKeywordPage />;
}
