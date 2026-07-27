import Midhem11RetroServerKeywordPage, { generateMetadata } from './midhem-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem11RetroServerKeywordPage />;
}
