import Shadowcores11RetroServerKeywordPage, { generateMetadata } from './shadowcores-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores11RetroServerKeywordPage />;
}
