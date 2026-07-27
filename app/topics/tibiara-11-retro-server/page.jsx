import Tibiara11RetroServerKeywordPage, { generateMetadata } from './tibiara-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara11RetroServerKeywordPage />;
}
