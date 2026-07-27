import Classicus772RetroServerKeywordPage, { generateMetadata } from './classicus-7-72-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus772RetroServerKeywordPage />;
}
