import RubinotEvoServerBrazilKeywordPage, { generateMetadata } from './rubinot-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RubinotEvoServerBrazilKeywordPage />;
}
