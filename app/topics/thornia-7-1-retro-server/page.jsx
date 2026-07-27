import Thornia71RetroServerKeywordPage, { generateMetadata } from './thornia-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia71RetroServerKeywordPage />;
}
