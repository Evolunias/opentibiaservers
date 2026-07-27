import Tibiara15RetroServerKeywordPage, { generateMetadata } from './tibiara-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara15RetroServerKeywordPage />;
}
