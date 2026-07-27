import Classicus13RetroServerKeywordPage, { generateMetadata } from './classicus-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus13RetroServerKeywordPage />;
}
