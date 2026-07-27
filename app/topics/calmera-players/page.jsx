import CalmeraPlayersKeywordPage, { generateMetadata } from './calmera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CalmeraPlayersKeywordPage />;
}
