import Tibia81RetroServersKeywordPage, { generateMetadata } from './tibia-8-1-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroServersKeywordPage />;
}
