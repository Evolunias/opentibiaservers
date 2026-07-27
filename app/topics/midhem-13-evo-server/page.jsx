import Midhem13EvoServerKeywordPage, { generateMetadata } from './midhem-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13EvoServerKeywordPage />;
}
