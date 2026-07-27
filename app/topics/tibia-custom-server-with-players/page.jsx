import TibiaCustomServerWithPlayersKeywordPage, { generateMetadata } from './tibia-custom-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaCustomServerWithPlayersKeywordPage />;
}
