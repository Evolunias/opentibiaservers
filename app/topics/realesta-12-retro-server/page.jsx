import Realesta12RetroServerKeywordPage, { generateMetadata } from './realesta-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta12RetroServerKeywordPage />;
}
