import Classicus854RetroServerKeywordPage, { generateMetadata } from './classicus-8-54-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus854RetroServerKeywordPage />;
}
