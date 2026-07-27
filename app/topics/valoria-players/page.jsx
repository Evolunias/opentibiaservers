import ValoriaPlayersKeywordPage, { generateMetadata } from './valoria-players';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <ValoriaPlayersKeywordPage />;
}
