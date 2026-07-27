import Realera12RetroServerKeywordPage, { generateMetadata } from './realera-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera12RetroServerKeywordPage />;
}
