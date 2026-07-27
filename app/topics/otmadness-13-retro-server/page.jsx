import Otmadness13RetroServerKeywordPage, { generateMetadata } from './otmadness-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness13RetroServerKeywordPage />;
}
