import TitaniaPlayersKeywordPage, { generateMetadata } from './titania-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TitaniaPlayersKeywordPage />;
}
