import Canob100RetroServerKeywordPage, { generateMetadata } from './canob-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Canob100RetroServerKeywordPage />;
}
