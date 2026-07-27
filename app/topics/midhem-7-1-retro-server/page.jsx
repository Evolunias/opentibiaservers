import Midhem71RetroServerKeywordPage, { generateMetadata } from './midhem-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem71RetroServerKeywordPage />;
}
