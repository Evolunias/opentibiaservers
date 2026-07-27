import Thaisot11EvoServerKeywordPage, { generateMetadata } from './thaisot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thaisot11EvoServerKeywordPage />;
}
