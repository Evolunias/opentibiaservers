import Medivia13RetroServerKeywordPage, { generateMetadata } from './medivia-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia13RetroServerKeywordPage />;
}
