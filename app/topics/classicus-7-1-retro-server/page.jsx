import Classicus71RetroServerKeywordPage, { generateMetadata } from './classicus-7-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus71RetroServerKeywordPage />;
}
