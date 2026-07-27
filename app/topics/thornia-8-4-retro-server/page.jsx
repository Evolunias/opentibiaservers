import Thornia84RetroServerKeywordPage, { generateMetadata } from './thornia-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia84RetroServerKeywordPage />;
}
