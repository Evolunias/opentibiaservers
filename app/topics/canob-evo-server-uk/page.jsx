import CanobEvoServerUkKeywordPage, { generateMetadata } from './canob-evo-server-uk';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobEvoServerUkKeywordPage />;
}
