import WithActivePlayersNoxiousotServerKeywordPage, { generateMetadata } from './with-active-players-noxiousot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <WithActivePlayersNoxiousotServerKeywordPage />;
}
