import Neprenia86RetroServerKeywordPage, { generateMetadata } from './neprenia-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia86RetroServerKeywordPage />;
}
