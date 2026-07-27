import NeranaPlayersKeywordPage, { generateMetadata } from './nerana-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NeranaPlayersKeywordPage />;
}
