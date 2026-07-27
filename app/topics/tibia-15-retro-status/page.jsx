import Tibia15RetroStatusKeywordPage, { generateMetadata } from './tibia-15-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroStatusKeywordPage />;
}
