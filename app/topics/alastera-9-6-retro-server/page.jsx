import Alastera96RetroServerKeywordPage, { generateMetadata } from './alastera-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera96RetroServerKeywordPage />;
}
