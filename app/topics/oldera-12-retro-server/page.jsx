import Oldera12RetroServerKeywordPage, { generateMetadata } from './oldera-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera12RetroServerKeywordPage />;
}
