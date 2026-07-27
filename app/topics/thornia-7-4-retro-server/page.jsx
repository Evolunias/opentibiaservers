import Thornia74RetroServerKeywordPage, { generateMetadata } from './thornia-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia74RetroServerKeywordPage />;
}
