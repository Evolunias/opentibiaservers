import EvoLumineraServersKeywordPage, { generateMetadata } from './evo-luminera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoLumineraServersKeywordPage />;
}
