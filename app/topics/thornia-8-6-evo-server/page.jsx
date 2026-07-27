import Thornia86EvoServerKeywordPage, { generateMetadata } from './thornia-8-6-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86EvoServerKeywordPage />;
}
