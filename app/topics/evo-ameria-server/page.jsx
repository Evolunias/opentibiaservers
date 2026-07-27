import EvoAmeriaServerKeywordPage, { generateMetadata } from './evo-ameria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoAmeriaServerKeywordPage />;
}
