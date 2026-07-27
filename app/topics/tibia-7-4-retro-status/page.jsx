import Tibia74RetroStatusKeywordPage, { generateMetadata } from './tibia-7-4-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia74RetroStatusKeywordPage />;
}
