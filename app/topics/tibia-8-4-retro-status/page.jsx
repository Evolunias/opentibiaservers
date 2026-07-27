import Tibia84RetroStatusKeywordPage, { generateMetadata } from './tibia-8-4-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroStatusKeywordPage />;
}
