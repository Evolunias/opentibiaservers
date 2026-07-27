import Alastera15RetroServerKeywordPage, { generateMetadata } from './alastera-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera15RetroServerKeywordPage />;
}
