import Canob12RetroServerKeywordPage, { generateMetadata } from './canob-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob12RetroServerKeywordPage />;
}
