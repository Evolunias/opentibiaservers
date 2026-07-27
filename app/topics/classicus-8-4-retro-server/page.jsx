import Classicus84RetroServerKeywordPage, { generateMetadata } from './classicus-8-4-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus84RetroServerKeywordPage />;
}
