import EvoTibiascapeServerKeywordPage, { generateMetadata } from './evo-tibiascape-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoTibiascapeServerKeywordPage />;
}
