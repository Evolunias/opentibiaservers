import TibiaHighExpServerWithPlayersKeywordPage, { generateMetadata } from './tibia-high-exp-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiaHighExpServerWithPlayersKeywordPage />;
}
