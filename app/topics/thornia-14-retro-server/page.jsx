import Thornia14RetroServerKeywordPage, { generateMetadata } from './thornia-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia14RetroServerKeywordPage />;
}
