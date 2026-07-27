import Midhem81RetroServerKeywordPage, { generateMetadata } from './midhem-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem81RetroServerKeywordPage />;
}
