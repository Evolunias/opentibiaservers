import Tibia12RetroServersKeywordPage, { generateMetadata } from './tibia-12-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroServersKeywordPage />;
}
