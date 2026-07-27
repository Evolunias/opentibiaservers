import Neprenia71RetroServerKeywordPage, { generateMetadata } from './neprenia-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia71RetroServerKeywordPage />;
}
