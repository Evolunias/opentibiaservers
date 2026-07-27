import Medivia12EvoServerKeywordPage, { generateMetadata } from './medivia-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12EvoServerKeywordPage />;
}
