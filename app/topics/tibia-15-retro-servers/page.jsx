import Tibia15RetroServersKeywordPage, { generateMetadata } from './tibia-15-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroServersKeywordPage />;
}
