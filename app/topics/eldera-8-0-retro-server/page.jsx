import Eldera80RetroServerKeywordPage, { generateMetadata } from './eldera-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera80RetroServerKeywordPage />;
}
