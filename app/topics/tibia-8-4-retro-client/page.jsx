import Tibia84RetroClientKeywordPage, { generateMetadata } from './tibia-8-4-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroClientKeywordPage />;
}
