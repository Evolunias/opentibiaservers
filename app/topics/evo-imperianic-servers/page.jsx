import EvoImperianicServersKeywordPage, { generateMetadata } from './evo-imperianic-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoImperianicServersKeywordPage />;
}
