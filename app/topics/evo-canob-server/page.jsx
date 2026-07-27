import EvoCanobServerKeywordPage, { generateMetadata } from './evo-canob-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoCanobServerKeywordPage />;
}
