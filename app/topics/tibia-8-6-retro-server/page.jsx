import Tibia86RetroServerKeywordPage, { generateMetadata } from './tibia-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroServerKeywordPage />;
}
