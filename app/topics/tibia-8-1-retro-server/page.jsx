import Tibia81RetroServerKeywordPage, { generateMetadata } from './tibia-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroServerKeywordPage />;
}
