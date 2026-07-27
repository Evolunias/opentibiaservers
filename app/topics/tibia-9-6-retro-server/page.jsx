import Tibia96RetroServerKeywordPage, { generateMetadata } from './tibia-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia96RetroServerKeywordPage />;
}
