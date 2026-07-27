import Ameria12RetroServerKeywordPage, { generateMetadata } from './ameria-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Ameria12RetroServerKeywordPage />;
}
