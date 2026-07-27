import Thornia14EvoServerKeywordPage, { generateMetadata } from './thornia-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14EvoServerKeywordPage />;
}
