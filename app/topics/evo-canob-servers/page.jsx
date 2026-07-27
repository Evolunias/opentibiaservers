import EvoCanobServersKeywordPage, { generateMetadata } from './evo-canob-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCanobServersKeywordPage />;
}
