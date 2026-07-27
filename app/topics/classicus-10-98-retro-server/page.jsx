import Classicus1098RetroServerKeywordPage, { generateMetadata } from './classicus-10-98-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus1098RetroServerKeywordPage />;
}
