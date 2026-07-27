import Tibia76RetroStatusKeywordPage, { generateMetadata } from './tibia-7-6-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RetroStatusKeywordPage />;
}
