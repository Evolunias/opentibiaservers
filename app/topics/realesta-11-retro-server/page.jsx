import Realesta11RetroServerKeywordPage, { generateMetadata } from './realesta-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta11RetroServerKeywordPage />;
}
