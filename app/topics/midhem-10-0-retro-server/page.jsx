import Midhem100RetroServerKeywordPage, { generateMetadata } from './midhem-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem100RetroServerKeywordPage />;
}
