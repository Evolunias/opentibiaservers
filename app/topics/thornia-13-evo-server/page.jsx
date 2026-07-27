import Thornia13EvoServerKeywordPage, { generateMetadata } from './thornia-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13EvoServerKeywordPage />;
}
