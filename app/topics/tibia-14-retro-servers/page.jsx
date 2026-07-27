import Tibia14RetroServersKeywordPage, { generateMetadata } from './tibia-14-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroServersKeywordPage />;
}
