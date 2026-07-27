import EvoThorniaServerKeywordPage, { generateMetadata } from './evo-thornia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoThorniaServerKeywordPage />;
}
