import Tibiara14RetroServerKeywordPage, { generateMetadata } from './tibiara-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara14RetroServerKeywordPage />;
}
