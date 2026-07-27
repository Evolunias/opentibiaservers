import Oldera74RetroServerKeywordPage, { generateMetadata } from './oldera-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera74RetroServerKeywordPage />;
}
