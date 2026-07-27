import Blazera12RetroServerKeywordPage, { generateMetadata } from './blazera-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Blazera12RetroServerKeywordPage />;
}
