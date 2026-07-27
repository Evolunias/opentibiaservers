import Thornia80RetroServerKeywordPage, { generateMetadata } from './thornia-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia80RetroServerKeywordPage />;
}
