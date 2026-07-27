import Alastera100RetroServerKeywordPage, { generateMetadata } from './alastera-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera100RetroServerKeywordPage />;
}
