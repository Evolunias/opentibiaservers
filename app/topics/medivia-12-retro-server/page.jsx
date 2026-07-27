import Medivia12RetroServerKeywordPage, { generateMetadata } from './medivia-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia12RetroServerKeywordPage />;
}
