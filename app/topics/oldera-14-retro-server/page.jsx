import Oldera14RetroServerKeywordPage, { generateMetadata } from './oldera-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera14RetroServerKeywordPage />;
}
