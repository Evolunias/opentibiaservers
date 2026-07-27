import CelestaPlayersKeywordPage, { generateMetadata } from './celesta-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CelestaPlayersKeywordPage />;
}
