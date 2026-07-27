import Trashformers13RetroServerKeywordPage, { generateMetadata } from './trashformers-13-retro-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13RetroServerKeywordPage />;
}
