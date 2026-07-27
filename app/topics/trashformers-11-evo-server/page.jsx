import Trashformers11EvoServerKeywordPage, { generateMetadata } from './trashformers-11-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers11EvoServerKeywordPage />;
}
