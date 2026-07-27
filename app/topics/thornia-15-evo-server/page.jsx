import Thornia15EvoServerKeywordPage, { generateMetadata } from './thornia-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia15EvoServerKeywordPage />;
}
