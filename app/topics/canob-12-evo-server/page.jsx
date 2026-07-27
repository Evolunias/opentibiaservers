import Canob12EvoServerKeywordPage, { generateMetadata } from './canob-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12EvoServerKeywordPage />;
}
