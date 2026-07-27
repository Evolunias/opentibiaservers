import Tibia86RetroServerListKeywordPage, { generateMetadata } from './tibia-8-6-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia86RetroServerListKeywordPage />;
}
