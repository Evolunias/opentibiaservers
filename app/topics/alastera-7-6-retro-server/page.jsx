import Alastera76RetroServerKeywordPage, { generateMetadata } from './alastera-7-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera76RetroServerKeywordPage />;
}
