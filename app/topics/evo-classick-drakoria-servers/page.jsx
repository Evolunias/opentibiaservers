import EvoClassickDrakoriaServersKeywordPage, { generateMetadata } from './evo-classick-drakoria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoClassickDrakoriaServersKeywordPage />;
}
