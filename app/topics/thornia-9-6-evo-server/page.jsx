import Thornia96EvoServerKeywordPage, { generateMetadata } from './thornia-9-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia96EvoServerKeywordPage />;
}
