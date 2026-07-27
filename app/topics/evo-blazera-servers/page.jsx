import EvoBlazeraServersKeywordPage, { generateMetadata } from './evo-blazera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoBlazeraServersKeywordPage />;
}
