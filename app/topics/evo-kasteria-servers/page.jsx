import EvoKasteriaServersKeywordPage, { generateMetadata } from './evo-kasteria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoKasteriaServersKeywordPage />;
}
