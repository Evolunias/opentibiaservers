import Tibiantis14EvoServerKeywordPage, { generateMetadata } from './tibiantis-14-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiantis14EvoServerKeywordPage />;
}
