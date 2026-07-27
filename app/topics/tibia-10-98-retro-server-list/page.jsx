import Tibia1098RetroServerListKeywordPage, { generateMetadata } from './tibia-10-98-retro-server-list';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibia1098RetroServerListKeywordPage />;
}
