import EvoOriginaltibiaServerKeywordPage, { generateMetadata } from './evo-originaltibia-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <EvoOriginaltibiaServerKeywordPage />;
}
