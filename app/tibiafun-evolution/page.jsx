import TibiafunEvolutionPage, { generateMetadata } from './tibiafun-evolution';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TibiafunEvolutionPage />;
}
