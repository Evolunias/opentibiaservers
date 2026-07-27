import Oldera14EvoServerKeywordPage, { generateMetadata } from './oldera-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14EvoServerKeywordPage />;
}
