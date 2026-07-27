import Canob14EvoServerKeywordPage, { generateMetadata } from './canob-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob14EvoServerKeywordPage />;
}
