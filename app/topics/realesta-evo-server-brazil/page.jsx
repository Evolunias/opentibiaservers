import RealestaEvoServerBrazilKeywordPage, { generateMetadata } from './realesta-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <RealestaEvoServerBrazilKeywordPage />;
}
