import Thornia11RetroServerKeywordPage, { generateMetadata } from './thornia-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia11RetroServerKeywordPage />;
}
