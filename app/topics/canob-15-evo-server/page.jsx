import Canob15EvoServerKeywordPage, { generateMetadata } from './canob-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15EvoServerKeywordPage />;
}
