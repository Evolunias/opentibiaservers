import Rubinot11EvoServerKeywordPage, { generateMetadata } from './rubinot-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Rubinot11EvoServerKeywordPage />;
}
