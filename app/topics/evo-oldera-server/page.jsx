import EvoOlderaServerKeywordPage, { generateMetadata } from './evo-oldera-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOlderaServerKeywordPage />;
}
