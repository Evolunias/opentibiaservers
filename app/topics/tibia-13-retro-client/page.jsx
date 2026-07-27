import Tibia13RetroClientKeywordPage, { generateMetadata } from './tibia-13-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia13RetroClientKeywordPage />;
}
