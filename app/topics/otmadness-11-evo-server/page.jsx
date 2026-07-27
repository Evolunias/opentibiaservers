import Otmadness11EvoServerKeywordPage, { generateMetadata } from './otmadness-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness11EvoServerKeywordPage />;
}
