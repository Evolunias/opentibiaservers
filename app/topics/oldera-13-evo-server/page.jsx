import Oldera13EvoServerKeywordPage, { generateMetadata } from './oldera-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera13EvoServerKeywordPage />;
}
