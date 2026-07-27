import Tibia11RetroStatusKeywordPage, { generateMetadata } from './tibia-11-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroStatusKeywordPage />;
}
