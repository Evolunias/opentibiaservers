import Tibia71RetroServerKeywordPage, { generateMetadata } from './tibia-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroServerKeywordPage />;
}
