import Tibia13RetroStatusKeywordPage, { generateMetadata } from './tibia-13-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroStatusKeywordPage />;
}
