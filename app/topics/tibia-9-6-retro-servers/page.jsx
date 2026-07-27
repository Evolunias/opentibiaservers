import Tibia96RetroServersKeywordPage, { generateMetadata } from './tibia-9-6-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroServersKeywordPage />;
}
