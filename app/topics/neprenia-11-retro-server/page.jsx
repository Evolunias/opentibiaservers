import Neprenia11RetroServerKeywordPage, { generateMetadata } from './neprenia-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia11RetroServerKeywordPage />;
}
