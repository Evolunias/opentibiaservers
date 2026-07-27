import Otmadness13EvoServerKeywordPage, { generateMetadata } from './otmadness-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13EvoServerKeywordPage />;
}
