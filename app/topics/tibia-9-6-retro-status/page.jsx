import Tibia96RetroStatusKeywordPage, { generateMetadata } from './tibia-9-6-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroStatusKeywordPage />;
}
