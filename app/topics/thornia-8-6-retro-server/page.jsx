import Thornia86RetroServerKeywordPage, { generateMetadata } from './thornia-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia86RetroServerKeywordPage />;
}
