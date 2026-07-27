import EvoBlazeraServerKeywordPage, { generateMetadata } from './evo-blazera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoBlazeraServerKeywordPage />;
}
