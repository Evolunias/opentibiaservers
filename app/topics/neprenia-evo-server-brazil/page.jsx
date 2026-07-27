import NepreniaEvoServerBrazilKeywordPage, { generateMetadata } from './neprenia-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <NepreniaEvoServerBrazilKeywordPage />;
}
