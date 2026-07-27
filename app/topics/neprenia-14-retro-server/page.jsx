import Neprenia14RetroServerKeywordPage, { generateMetadata } from './neprenia-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia14RetroServerKeywordPage />;
}
