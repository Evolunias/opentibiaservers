import Eldera13RetroServerKeywordPage, { generateMetadata } from './eldera-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera13RetroServerKeywordPage />;
}
