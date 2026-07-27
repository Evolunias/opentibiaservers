import Midhem13RetroServerKeywordPage, { generateMetadata } from './midhem-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem13RetroServerKeywordPage />;
}
