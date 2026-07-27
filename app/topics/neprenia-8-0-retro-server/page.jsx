import Neprenia80RetroServerKeywordPage, { generateMetadata } from './neprenia-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia80RetroServerKeywordPage />;
}
