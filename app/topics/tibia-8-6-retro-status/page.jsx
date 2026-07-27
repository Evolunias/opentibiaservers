import Tibia86RetroStatusKeywordPage, { generateMetadata } from './tibia-8-6-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroStatusKeywordPage />;
}
