import Thornia100RetroServerKeywordPage, { generateMetadata } from './thornia-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Thornia100RetroServerKeywordPage />;
}
