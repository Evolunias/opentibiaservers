import EvoThorniaServersKeywordPage, { generateMetadata } from './evo-thornia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoThorniaServersKeywordPage />;
}
