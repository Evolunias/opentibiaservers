import Otmadness12RetroServerKeywordPage, { generateMetadata } from './otmadness-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Otmadness12RetroServerKeywordPage />;
}
