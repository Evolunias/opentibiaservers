import OtlandServerGalaWithPlayersKeywordPage, { generateMetadata } from './otland-server-gala-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <OtlandServerGalaWithPlayersKeywordPage />;
}
