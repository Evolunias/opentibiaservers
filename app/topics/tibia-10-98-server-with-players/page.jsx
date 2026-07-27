import Tibia1098ServerWithPlayersKeywordPage, { generateMetadata } from './tibia-10-98-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098ServerWithPlayersKeywordPage />;
}
