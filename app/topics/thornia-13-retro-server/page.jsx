import Thornia13RetroServerKeywordPage, { generateMetadata } from './thornia-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia13RetroServerKeywordPage />;
}
