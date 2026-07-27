import EvoMediviaServersKeywordPage, { generateMetadata } from './evo-medivia-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoMediviaServersKeywordPage />;
}
