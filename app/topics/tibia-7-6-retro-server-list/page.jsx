import Tibia76RetroServerListKeywordPage, { generateMetadata } from './tibia-7-6-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia76RetroServerListKeywordPage />;
}
