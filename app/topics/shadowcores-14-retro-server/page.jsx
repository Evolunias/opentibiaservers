import Shadowcores14RetroServerKeywordPage, { generateMetadata } from './shadowcores-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores14RetroServerKeywordPage />;
}
