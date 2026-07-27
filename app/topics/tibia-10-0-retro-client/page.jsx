import Tibia100RetroClientKeywordPage, { generateMetadata } from './tibia-10-0-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroClientKeywordPage />;
}
