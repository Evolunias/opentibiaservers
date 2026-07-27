import Tibia96RetroClientKeywordPage, { generateMetadata } from './tibia-9-6-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroClientKeywordPage />;
}
