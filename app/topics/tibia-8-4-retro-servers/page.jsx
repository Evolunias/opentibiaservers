import Tibia84RetroServersKeywordPage, { generateMetadata } from './tibia-8-4-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroServersKeywordPage />;
}
