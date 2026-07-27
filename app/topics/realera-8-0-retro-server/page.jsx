import Realera80RetroServerKeywordPage, { generateMetadata } from './realera-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera80RetroServerKeywordPage />;
}
