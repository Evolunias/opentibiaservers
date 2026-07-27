import Alastera86RetroServerKeywordPage, { generateMetadata } from './alastera-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera86RetroServerKeywordPage />;
}
