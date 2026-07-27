import Thornia71EvoServerKeywordPage, { generateMetadata } from './thornia-7-1-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71EvoServerKeywordPage />;
}
