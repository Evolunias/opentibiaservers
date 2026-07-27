import Eldera15RetroServerKeywordPage, { generateMetadata } from './eldera-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Eldera15RetroServerKeywordPage />;
}
