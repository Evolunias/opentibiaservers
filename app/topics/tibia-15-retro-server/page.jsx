import Tibia15RetroServerKeywordPage, { generateMetadata } from './tibia-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroServerKeywordPage />;
}
