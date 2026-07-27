import Tibia772RetroServerKeywordPage, { generateMetadata } from './tibia-7-72-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia772RetroServerKeywordPage />;
}
