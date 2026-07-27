import Trashformers15EvoServerKeywordPage, { generateMetadata } from './trashformers-15-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers15EvoServerKeywordPage />;
}
