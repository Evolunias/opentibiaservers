import OlderaWithActivePlayersServerUsaKeywordPage, { generateMetadata } from './oldera-with-active-players-server-usa';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OlderaWithActivePlayersServerUsaKeywordPage />;
}
