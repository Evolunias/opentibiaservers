import Shadowcores96RetroServerKeywordPage, { generateMetadata } from './shadowcores-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Shadowcores96RetroServerKeywordPage />;
}
