import Tibia76RetroClientKeywordPage, { generateMetadata } from './tibia-7-6-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RetroClientKeywordPage />;
}
