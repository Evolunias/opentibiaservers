import MyaacWithPlayersKeywordPage, { generateMetadata } from './myaac-with-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MyaacWithPlayersKeywordPage />;
}
