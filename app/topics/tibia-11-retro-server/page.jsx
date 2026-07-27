import Tibia11RetroServerKeywordPage, { generateMetadata } from './tibia-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroServerKeywordPage />;
}
