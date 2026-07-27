import Tibia1098RetroServersKeywordPage, { generateMetadata } from './tibia-10-98-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RetroServersKeywordPage />;
}
