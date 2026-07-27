import Tibia1098RetroStatusKeywordPage, { generateMetadata } from './tibia-10-98-retro-status';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RetroStatusKeywordPage />;
}
