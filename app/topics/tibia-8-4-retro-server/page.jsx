import Tibia84RetroServerKeywordPage, { generateMetadata } from './tibia-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroServerKeywordPage />;
}
