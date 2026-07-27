import Medivia15RetroServerKeywordPage, { generateMetadata } from './medivia-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia15RetroServerKeywordPage />;
}
