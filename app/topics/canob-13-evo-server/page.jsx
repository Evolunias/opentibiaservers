import Canob13EvoServerKeywordPage, { generateMetadata } from './canob-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob13EvoServerKeywordPage />;
}
