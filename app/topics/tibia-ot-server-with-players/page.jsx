import TibiaOtServerWithPlayersKeywordPage, { generateMetadata } from './tibia-ot-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaOtServerWithPlayersKeywordPage />;
}
