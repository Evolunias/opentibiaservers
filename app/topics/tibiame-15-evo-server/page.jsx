import Tibiame15EvoServerKeywordPage, { generateMetadata } from './tibiame-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15EvoServerKeywordPage />;
}
