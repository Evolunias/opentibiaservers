import Kasteria14RetroServerKeywordPage, { generateMetadata } from './kasteria-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Kasteria14RetroServerKeywordPage />;
}
