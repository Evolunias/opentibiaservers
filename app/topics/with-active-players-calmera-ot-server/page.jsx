import WithActivePlayersCalmeraOtServerKeywordPage, { generateMetadata } from './with-active-players-calmera-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersCalmeraOtServerKeywordPage />;
}
