import Tibijka14RetroServerKeywordPage, { generateMetadata } from './tibijka-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka14RetroServerKeywordPage />;
}
