import Classicus80RetroServerKeywordPage, { generateMetadata } from './classicus-8-0-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus80RetroServerKeywordPage />;
}
