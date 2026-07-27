import Tibiara13RetroServerKeywordPage, { generateMetadata } from './tibiara-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara13RetroServerKeywordPage />;
}
