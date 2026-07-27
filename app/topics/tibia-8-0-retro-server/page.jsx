import Tibia80RetroServerKeywordPage, { generateMetadata } from './tibia-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroServerKeywordPage />;
}
