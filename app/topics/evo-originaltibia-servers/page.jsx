import EvoOriginaltibiaServersKeywordPage, { generateMetadata } from './evo-originaltibia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOriginaltibiaServersKeywordPage />;
}
