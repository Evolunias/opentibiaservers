import Tibia74ServerWithPlayersKeywordPage, { generateMetadata } from './tibia-7-4-server-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74ServerWithPlayersKeywordPage />;
}
