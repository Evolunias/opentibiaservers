import NonPvpOtServerWithPlayersKeywordPage, { generateMetadata } from './non-pvp-ot-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NonPvpOtServerWithPlayersKeywordPage />;
}
