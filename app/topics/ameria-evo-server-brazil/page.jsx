import AmeriaEvoServerBrazilKeywordPage, { generateMetadata } from './ameria-evo-server-brazil';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <AmeriaEvoServerBrazilKeywordPage />;
}
