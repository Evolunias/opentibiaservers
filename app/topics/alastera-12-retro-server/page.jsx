import Alastera12RetroServerKeywordPage, { generateMetadata } from './alastera-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera12RetroServerKeywordPage />;
}
