import Tibia74RetroClientKeywordPage, { generateMetadata } from './tibia-7-4-retro-client';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroClientKeywordPage />;
}
