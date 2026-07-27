import Realera14RetroServerKeywordPage, { generateMetadata } from './realera-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera14RetroServerKeywordPage />;
}
