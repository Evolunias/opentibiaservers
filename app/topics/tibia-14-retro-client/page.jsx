import Tibia14RetroClientKeywordPage, { generateMetadata } from './tibia-14-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia14RetroClientKeywordPage />;
}
