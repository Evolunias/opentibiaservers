import Neprenia96RetroServerKeywordPage, { generateMetadata } from './neprenia-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia96RetroServerKeywordPage />;
}
