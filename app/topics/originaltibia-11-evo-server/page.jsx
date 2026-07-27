import Originaltibia11EvoServerKeywordPage, { generateMetadata } from './originaltibia-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Originaltibia11EvoServerKeywordPage />;
}
