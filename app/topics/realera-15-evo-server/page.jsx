import Realera15EvoServerKeywordPage, { generateMetadata } from './realera-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15EvoServerKeywordPage />;
}
