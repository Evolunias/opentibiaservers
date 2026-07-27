import Tibia100RetroServersKeywordPage, { generateMetadata } from './tibia-10-0-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroServersKeywordPage />;
}
