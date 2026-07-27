import Ameria15EvoServerKeywordPage, { generateMetadata } from './ameria-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria15EvoServerKeywordPage />;
}
