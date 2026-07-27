import Tibia84RetroServerListKeywordPage, { generateMetadata } from './tibia-8-4-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia84RetroServerListKeywordPage />;
}
