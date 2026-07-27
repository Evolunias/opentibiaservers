import Midhem80RetroServerKeywordPage, { generateMetadata } from './midhem-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem80RetroServerKeywordPage />;
}
