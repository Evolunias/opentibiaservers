import Eldera86RetroServerKeywordPage, { generateMetadata } from './eldera-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera86RetroServerKeywordPage />;
}
