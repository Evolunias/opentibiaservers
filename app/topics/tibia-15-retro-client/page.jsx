import Tibia15RetroClientKeywordPage, { generateMetadata } from './tibia-15-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroClientKeywordPage />;
}
