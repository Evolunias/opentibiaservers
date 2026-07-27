import Oldera80RetroServerKeywordPage, { generateMetadata } from './oldera-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera80RetroServerKeywordPage />;
}
