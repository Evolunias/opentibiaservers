import Tibiame12RetroServerKeywordPage, { generateMetadata } from './tibiame-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame12RetroServerKeywordPage />;
}
