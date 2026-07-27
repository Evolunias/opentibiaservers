import Tibia13RetroServersKeywordPage, { generateMetadata } from './tibia-13-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroServersKeywordPage />;
}
