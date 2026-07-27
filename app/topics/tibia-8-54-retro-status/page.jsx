import Tibia854RetroStatusKeywordPage, { generateMetadata } from './tibia-8-54-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia854RetroStatusKeywordPage />;
}
