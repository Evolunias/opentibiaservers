import Oldera15RetroServerKeywordPage, { generateMetadata } from './oldera-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Oldera15RetroServerKeywordPage />;
}
