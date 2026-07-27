import Midhem12RetroServerKeywordPage, { generateMetadata } from './midhem-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem12RetroServerKeywordPage />;
}
