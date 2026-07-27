import Trashformers13EvoServerKeywordPage, { generateMetadata } from './trashformers-13-evo-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13EvoServerKeywordPage />;
}
