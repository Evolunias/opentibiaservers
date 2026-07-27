import Tibiame15RetroServerKeywordPage, { generateMetadata } from './tibiame-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Tibiame15RetroServerKeywordPage />;
}
