import HighExpTrashformersServerKeywordPage, { generateMetadata } from './high-exp-trashformers-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <HighExpTrashformersServerKeywordPage />;
}
