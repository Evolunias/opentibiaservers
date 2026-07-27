import Alastera71RetroServerKeywordPage, { generateMetadata } from './alastera-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera71RetroServerKeywordPage />;
}
