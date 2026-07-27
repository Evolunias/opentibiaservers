import Canob15RetroServerKeywordPage, { generateMetadata } from './canob-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob15RetroServerKeywordPage />;
}
