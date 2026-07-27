import EvoCarlinotServersKeywordPage, { generateMetadata } from './evo-carlinot-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCarlinotServersKeywordPage />;
}
