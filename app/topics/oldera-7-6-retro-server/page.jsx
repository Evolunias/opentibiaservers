import Oldera76RetroServerKeywordPage, { generateMetadata } from './oldera-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera76RetroServerKeywordPage />;
}
