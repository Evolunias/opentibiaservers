import Alastera80RetroServerKeywordPage, { generateMetadata } from './alastera-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera80RetroServerKeywordPage />;
}
