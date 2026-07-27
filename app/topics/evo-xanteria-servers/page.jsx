import EvoXanteriaServersKeywordPage, { generateMetadata } from './evo-xanteria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoXanteriaServersKeywordPage />;
}
