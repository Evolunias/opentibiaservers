import Classicus81RetroServerKeywordPage, { generateMetadata } from './classicus-8-1-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus81RetroServerKeywordPage />;
}
