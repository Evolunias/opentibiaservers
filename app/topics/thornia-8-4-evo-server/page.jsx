import Thornia84EvoServerKeywordPage, { generateMetadata } from './thornia-8-4-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84EvoServerKeywordPage />;
}
