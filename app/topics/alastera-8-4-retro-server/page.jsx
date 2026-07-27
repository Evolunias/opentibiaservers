import Alastera84RetroServerKeywordPage, { generateMetadata } from './alastera-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Alastera84RetroServerKeywordPage />;
}
