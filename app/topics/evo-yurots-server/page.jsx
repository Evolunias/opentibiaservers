import EvoYurotsServerKeywordPage, { generateMetadata } from './evo-yurots-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoYurotsServerKeywordPage />;
}
