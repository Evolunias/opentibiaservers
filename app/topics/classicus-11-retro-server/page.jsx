import Classicus11RetroServerKeywordPage, { generateMetadata } from './classicus-11-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus11RetroServerKeywordPage />;
}
