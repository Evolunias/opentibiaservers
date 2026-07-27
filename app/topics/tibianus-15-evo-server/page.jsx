import Tibianus15EvoServerKeywordPage, { generateMetadata } from './tibianus-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus15EvoServerKeywordPage />;
}
