import Kasteria12RetroServerKeywordPage, { generateMetadata } from './kasteria-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria12RetroServerKeywordPage />;
}
