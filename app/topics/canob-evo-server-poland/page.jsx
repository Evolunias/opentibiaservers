import CanobEvoServerPolandKeywordPage, { generateMetadata } from './canob-evo-server-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <CanobEvoServerPolandKeywordPage />;
}
