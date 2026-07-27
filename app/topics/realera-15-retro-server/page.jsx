import Realera15RetroServerKeywordPage, { generateMetadata } from './realera-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Realera15RetroServerKeywordPage />;
}
