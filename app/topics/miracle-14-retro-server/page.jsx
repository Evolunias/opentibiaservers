import Miracle14RetroServerKeywordPage, { generateMetadata } from './miracle-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Miracle14RetroServerKeywordPage />;
}
