import Trashformers12LowExpServerKeywordPage, { generateMetadata } from './trashformers-12-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers12LowExpServerKeywordPage />;
}
