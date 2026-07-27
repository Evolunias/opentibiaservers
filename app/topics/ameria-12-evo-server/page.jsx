import Ameria12EvoServerKeywordPage, { generateMetadata } from './ameria-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12EvoServerKeywordPage />;
}
