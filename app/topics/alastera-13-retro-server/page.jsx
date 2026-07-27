import Alastera13RetroServerKeywordPage, { generateMetadata } from './alastera-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera13RetroServerKeywordPage />;
}
