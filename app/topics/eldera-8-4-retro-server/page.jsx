import Eldera84RetroServerKeywordPage, { generateMetadata } from './eldera-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera84RetroServerKeywordPage />;
}
