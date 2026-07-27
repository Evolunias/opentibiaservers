import Neprenia13RetroServerKeywordPage, { generateMetadata } from './neprenia-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia13RetroServerKeywordPage />;
}
