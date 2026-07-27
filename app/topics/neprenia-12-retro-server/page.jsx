import Neprenia12RetroServerKeywordPage, { generateMetadata } from './neprenia-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Neprenia12RetroServerKeywordPage />;
}
