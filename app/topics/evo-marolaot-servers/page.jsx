import EvoMarolaotServersKeywordPage, { generateMetadata } from './evo-marolaot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMarolaotServersKeywordPage />;
}
