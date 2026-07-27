import Tibia100RetroServerKeywordPage, { generateMetadata } from './tibia-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroServerKeywordPage />;
}
