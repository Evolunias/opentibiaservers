import Tibia74RetroServersKeywordPage, { generateMetadata } from './tibia-7-4-retro-servers';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroServersKeywordPage />;
}
