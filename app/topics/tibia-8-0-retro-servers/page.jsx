import Tibia80RetroServersKeywordPage, { generateMetadata } from './tibia-8-0-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroServersKeywordPage />;
}
