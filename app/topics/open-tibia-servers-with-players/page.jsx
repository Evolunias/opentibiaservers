import OpenTibiaServersWithPlayersKeywordPage, { generateMetadata } from './open-tibia-servers-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OpenTibiaServersWithPlayersKeywordPage />;
}
