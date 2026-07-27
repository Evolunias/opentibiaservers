import Classicus74RetroServerKeywordPage, { generateMetadata } from './classicus-7-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus74RetroServerKeywordPage />;
}
