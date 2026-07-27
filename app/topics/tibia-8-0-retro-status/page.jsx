import Tibia80RetroStatusKeywordPage, { generateMetadata } from './tibia-8-0-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroStatusKeywordPage />;
}
