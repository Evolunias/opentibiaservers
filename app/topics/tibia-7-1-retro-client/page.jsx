import Tibia71RetroClientKeywordPage, { generateMetadata } from './tibia-7-1-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia71RetroClientKeywordPage />;
}
