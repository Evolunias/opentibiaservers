import MediviaEvoServersPolandKeywordPage, { generateMetadata } from './medivia-evo-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <MediviaEvoServersPolandKeywordPage />;
}
