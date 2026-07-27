import Kasteria86RetroServerKeywordPage, { generateMetadata } from './kasteria-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria86RetroServerKeywordPage />;
}
