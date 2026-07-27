import Classicus12RetroServerKeywordPage, { generateMetadata } from './classicus-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Classicus12RetroServerKeywordPage />;
}
