import Tibijka96RetroServerKeywordPage, { generateMetadata } from './tibijka-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibijka96RetroServerKeywordPage />;
}
