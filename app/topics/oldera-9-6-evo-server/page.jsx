import Oldera96EvoServerKeywordPage, { generateMetadata } from './oldera-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera96EvoServerKeywordPage />;
}
