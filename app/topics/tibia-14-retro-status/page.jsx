import Tibia14RetroStatusKeywordPage, { generateMetadata } from './tibia-14-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroStatusKeywordPage />;
}
