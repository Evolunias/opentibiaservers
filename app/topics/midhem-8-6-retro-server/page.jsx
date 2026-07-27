import Midhem86RetroServerKeywordPage, { generateMetadata } from './midhem-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem86RetroServerKeywordPage />;
}
