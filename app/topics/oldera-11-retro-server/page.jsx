import Oldera11RetroServerKeywordPage, { generateMetadata } from './oldera-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera11RetroServerKeywordPage />;
}
