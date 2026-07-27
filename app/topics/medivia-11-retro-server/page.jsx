import Medivia11RetroServerKeywordPage, { generateMetadata } from './medivia-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia11RetroServerKeywordPage />;
}
