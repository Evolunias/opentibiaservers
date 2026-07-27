import EvoServersPolandKeywordPage, { generateMetadata } from './evo-servers-poland';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoServersPolandKeywordPage />;
}
