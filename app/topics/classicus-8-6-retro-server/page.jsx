import Classicus86RetroServerKeywordPage, { generateMetadata } from './classicus-8-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus86RetroServerKeywordPage />;
}
