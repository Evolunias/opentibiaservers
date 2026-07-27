import Alastera81RetroServerKeywordPage, { generateMetadata } from './alastera-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera81RetroServerKeywordPage />;
}
