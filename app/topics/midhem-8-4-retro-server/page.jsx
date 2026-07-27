import Midhem84RetroServerKeywordPage, { generateMetadata } from './midhem-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem84RetroServerKeywordPage />;
}
