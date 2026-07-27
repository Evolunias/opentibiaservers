import Tibia76RetroServerKeywordPage, { generateMetadata } from './tibia-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RetroServerKeywordPage />;
}
