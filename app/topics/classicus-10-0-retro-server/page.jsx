import Classicus100RetroServerKeywordPage, { generateMetadata } from './classicus-10-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus100RetroServerKeywordPage />;
}
