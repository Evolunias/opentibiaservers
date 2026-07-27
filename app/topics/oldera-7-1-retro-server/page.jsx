import Oldera71RetroServerKeywordPage, { generateMetadata } from './oldera-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera71RetroServerKeywordPage />;
}
