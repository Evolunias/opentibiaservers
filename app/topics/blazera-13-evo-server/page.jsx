import Blazera13EvoServerKeywordPage, { generateMetadata } from './blazera-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera13EvoServerKeywordPage />;
}
