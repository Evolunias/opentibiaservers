import Realera11RetroServerKeywordPage, { generateMetadata } from './realera-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera11RetroServerKeywordPage />;
}
