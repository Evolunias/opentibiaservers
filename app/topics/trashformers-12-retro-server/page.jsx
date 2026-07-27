import Trashformers12RetroServerKeywordPage, { generateMetadata } from './trashformers-12-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12RetroServerKeywordPage />;
}
