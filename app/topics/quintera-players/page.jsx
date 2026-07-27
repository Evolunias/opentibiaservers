import QuinteraPlayersKeywordPage, { generateMetadata } from './quintera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <QuinteraPlayersKeywordPage />;
}
