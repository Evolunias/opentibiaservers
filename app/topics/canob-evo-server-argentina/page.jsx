import CanobEvoServerArgentinaKeywordPage, { generateMetadata } from './canob-evo-server-argentina';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobEvoServerArgentinaKeywordPage />;
}
