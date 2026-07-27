import Blazera14EvoServerKeywordPage, { generateMetadata } from './blazera-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera14EvoServerKeywordPage />;
}
