import Otmadness15EvoServerKeywordPage, { generateMetadata } from './otmadness-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness15EvoServerKeywordPage />;
}
