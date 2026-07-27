import Otmadness12EvoServerKeywordPage, { generateMetadata } from './otmadness-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12EvoServerKeywordPage />;
}
