import Otmadness11RetroServerKeywordPage, { generateMetadata } from './otmadness-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness11RetroServerKeywordPage />;
}
