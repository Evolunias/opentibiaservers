import Realera13EvoServerKeywordPage, { generateMetadata } from './realera-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13EvoServerKeywordPage />;
}
