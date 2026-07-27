import Tibianus12EvoServerKeywordPage, { generateMetadata } from './tibianus-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus12EvoServerKeywordPage />;
}
