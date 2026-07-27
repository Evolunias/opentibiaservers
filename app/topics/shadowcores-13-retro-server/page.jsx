import Shadowcores13RetroServerKeywordPage, { generateMetadata } from './shadowcores-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores13RetroServerKeywordPage />;
}
