import EvoRealeraServersKeywordPage, { generateMetadata } from './evo-realera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoRealeraServersKeywordPage />;
}
