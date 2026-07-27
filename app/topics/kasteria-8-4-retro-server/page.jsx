import Kasteria84RetroServerKeywordPage, { generateMetadata } from './kasteria-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria84RetroServerKeywordPage />;
}
