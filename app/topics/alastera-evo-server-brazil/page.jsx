import AlasteraEvoServerBrazilKeywordPage, { generateMetadata } from './alastera-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AlasteraEvoServerBrazilKeywordPage />;
}
