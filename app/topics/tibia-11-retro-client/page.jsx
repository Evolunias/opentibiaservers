import Tibia11RetroClientKeywordPage, { generateMetadata } from './tibia-11-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroClientKeywordPage />;
}
