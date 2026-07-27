import Tibia11RetroServerListKeywordPage, { generateMetadata } from './tibia-11-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia11RetroServerListKeywordPage />;
}
