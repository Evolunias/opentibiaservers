import WithActivePlayersOtServerUsaKeywordPage, { generateMetadata } from './with-active-players-ot-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersOtServerUsaKeywordPage />;
}
