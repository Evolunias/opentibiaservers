import Classicus14RetroServerKeywordPage, { generateMetadata } from './classicus-14-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus14RetroServerKeywordPage />;
}
