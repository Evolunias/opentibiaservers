import Kasteria80RetroServerKeywordPage, { generateMetadata } from './kasteria-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria80RetroServerKeywordPage />;
}
