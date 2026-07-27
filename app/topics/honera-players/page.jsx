import HoneraPlayersKeywordPage, { generateMetadata } from './honera-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HoneraPlayersKeywordPage />;
}
