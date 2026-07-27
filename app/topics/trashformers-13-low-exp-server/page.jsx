import Trashformers13LowExpServerKeywordPage, { generateMetadata } from './trashformers-13-low-exp-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <Trashformers13LowExpServerKeywordPage />;
}
