import TibijkaEvoServerBrazilKeywordPage, { generateMetadata } from './tibijka-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibijkaEvoServerBrazilKeywordPage />;
}
