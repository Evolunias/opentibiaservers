import Tibia71RetroServersKeywordPage, { generateMetadata } from './tibia-7-1-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroServersKeywordPage />;
}
