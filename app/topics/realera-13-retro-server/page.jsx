import Realera13RetroServerKeywordPage, { generateMetadata } from './realera-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera13RetroServerKeywordPage />;
}
