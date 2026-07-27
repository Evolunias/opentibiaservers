import Otmadness15RetroServerKeywordPage, { generateMetadata } from './otmadness-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness15RetroServerKeywordPage />;
}
