import Tibia86RetroClientKeywordPage, { generateMetadata } from './tibia-8-6-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroClientKeywordPage />;
}
