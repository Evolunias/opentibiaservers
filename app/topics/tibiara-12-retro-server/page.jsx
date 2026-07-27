import Tibiara12RetroServerKeywordPage, { generateMetadata } from './tibiara-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiara12RetroServerKeywordPage />;
}
