import Tibia100RetroServerListKeywordPage, { generateMetadata } from './tibia-10-0-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia100RetroServerListKeywordPage />;
}
