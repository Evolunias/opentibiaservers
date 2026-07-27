import Alastera14RetroServerKeywordPage, { generateMetadata } from './alastera-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera14RetroServerKeywordPage />;
}
