import Tibia15RetroServerListKeywordPage, { generateMetadata } from './tibia-15-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia15RetroServerListKeywordPage />;
}
