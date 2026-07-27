import PaceraPlayersKeywordPage, { generateMetadata } from './pacera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <PaceraPlayersKeywordPage />;
}
