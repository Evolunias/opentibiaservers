import AureraGlobal12WithActivePlayersServerKeywordPage, { generateMetadata } from './aurera-global-12-with-active-players-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AureraGlobal12WithActivePlayersServerKeywordPage />;
}
