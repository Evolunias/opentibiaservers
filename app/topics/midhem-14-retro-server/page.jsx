import Midhem14RetroServerKeywordPage, { generateMetadata } from './midhem-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Midhem14RetroServerKeywordPage />;
}
