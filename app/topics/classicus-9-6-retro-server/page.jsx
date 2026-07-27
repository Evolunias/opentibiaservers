import Classicus96RetroServerKeywordPage, { generateMetadata } from './classicus-9-6-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus96RetroServerKeywordPage />;
}
