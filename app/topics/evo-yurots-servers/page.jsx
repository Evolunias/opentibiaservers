import EvoYurotsServersKeywordPage, { generateMetadata } from './evo-yurots-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoYurotsServersKeywordPage />;
}
