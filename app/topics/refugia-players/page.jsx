import RefugiaPlayersKeywordPage, { generateMetadata } from './refugia-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RefugiaPlayersKeywordPage />;
}
