import Trashformers12EvoServerKeywordPage, { generateMetadata } from './trashformers-12-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12EvoServerKeywordPage />;
}
