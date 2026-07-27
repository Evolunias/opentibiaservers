import Oldera84RetroServerKeywordPage, { generateMetadata } from './oldera-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera84RetroServerKeywordPage />;
}
