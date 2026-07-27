import Oldera15EvoServerKeywordPage, { generateMetadata } from './oldera-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15EvoServerKeywordPage />;
}
