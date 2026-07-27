import Blazera15EvoServerKeywordPage, { generateMetadata } from './blazera-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera15EvoServerKeywordPage />;
}
