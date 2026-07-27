import Medivia81RetroServerKeywordPage, { generateMetadata } from './medivia-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia81RetroServerKeywordPage />;
}
