import Medivia96RetroServerKeywordPage, { generateMetadata } from './medivia-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Medivia96RetroServerKeywordPage />;
}
