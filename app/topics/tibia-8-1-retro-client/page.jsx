import Tibia81RetroClientKeywordPage, { generateMetadata } from './tibia-8-1-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia81RetroClientKeywordPage />;
}
