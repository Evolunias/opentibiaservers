import EvoElderaServersKeywordPage, { generateMetadata } from './evo-eldera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoElderaServersKeywordPage />;
}
