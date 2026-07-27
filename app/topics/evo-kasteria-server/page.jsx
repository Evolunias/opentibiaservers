import EvoKasteriaServerKeywordPage, { generateMetadata } from './evo-kasteria-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoKasteriaServerKeywordPage />;
}
