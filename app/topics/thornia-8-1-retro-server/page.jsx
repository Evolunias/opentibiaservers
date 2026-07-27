import Thornia81RetroServerKeywordPage, { generateMetadata } from './thornia-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia81RetroServerKeywordPage />;
}
