import Tibiame14EvoServerKeywordPage, { generateMetadata } from './tibiame-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame14EvoServerKeywordPage />;
}
