import Tibia12RetroClientKeywordPage, { generateMetadata } from './tibia-12-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia12RetroClientKeywordPage />;
}
