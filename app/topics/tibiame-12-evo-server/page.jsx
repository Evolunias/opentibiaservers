import Tibiame12EvoServerKeywordPage, { generateMetadata } from './tibiame-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12EvoServerKeywordPage />;
}
