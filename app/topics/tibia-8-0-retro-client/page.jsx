import Tibia80RetroClientKeywordPage, { generateMetadata } from './tibia-8-0-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia80RetroClientKeywordPage />;
}
