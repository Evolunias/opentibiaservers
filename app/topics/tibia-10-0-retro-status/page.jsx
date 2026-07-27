import Tibia100RetroStatusKeywordPage, { generateMetadata } from './tibia-10-0-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroStatusKeywordPage />;
}
