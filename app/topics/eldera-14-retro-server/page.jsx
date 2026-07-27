import Eldera14RetroServerKeywordPage, { generateMetadata } from './eldera-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera14RetroServerKeywordPage />;
}
