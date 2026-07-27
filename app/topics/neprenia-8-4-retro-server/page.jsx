import Neprenia84RetroServerKeywordPage, { generateMetadata } from './neprenia-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia84RetroServerKeywordPage />;
}
