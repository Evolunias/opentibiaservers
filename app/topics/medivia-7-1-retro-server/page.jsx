import Medivia71RetroServerKeywordPage, { generateMetadata } from './medivia-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia71RetroServerKeywordPage />;
}
