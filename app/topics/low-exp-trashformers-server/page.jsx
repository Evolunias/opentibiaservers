import LowExpTrashformersServerKeywordPage, { generateMetadata } from './low-exp-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <LowExpTrashformersServerKeywordPage />;
}
