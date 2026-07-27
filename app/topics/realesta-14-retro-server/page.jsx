import Realesta14RetroServerKeywordPage, { generateMetadata } from './realesta-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realesta14RetroServerKeywordPage />;
}
