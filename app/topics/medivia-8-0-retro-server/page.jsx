import Medivia80RetroServerKeywordPage, { generateMetadata } from './medivia-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia80RetroServerKeywordPage />;
}
