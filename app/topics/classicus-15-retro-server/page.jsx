import Classicus15RetroServerKeywordPage, { generateMetadata } from './classicus-15-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus15RetroServerKeywordPage />;
}
