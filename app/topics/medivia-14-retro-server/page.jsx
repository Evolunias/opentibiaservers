import Medivia14RetroServerKeywordPage, { generateMetadata } from './medivia-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia14RetroServerKeywordPage />;
}
