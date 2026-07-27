import EvoAmeriaServersKeywordPage, { generateMetadata } from './evo-ameria-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoAmeriaServersKeywordPage />;
}
