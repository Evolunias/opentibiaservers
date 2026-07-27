import EvoAlasteraServersKeywordPage, { generateMetadata } from './evo-alastera-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoAlasteraServersKeywordPage />;
}
