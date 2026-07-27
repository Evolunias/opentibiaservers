import Tibia71RetroStatusKeywordPage, { generateMetadata } from './tibia-7-1-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroStatusKeywordPage />;
}
