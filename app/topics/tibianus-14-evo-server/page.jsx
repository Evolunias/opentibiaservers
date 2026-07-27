import Tibianus14EvoServerKeywordPage, { generateMetadata } from './tibianus-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibianus14EvoServerKeywordPage />;
}
