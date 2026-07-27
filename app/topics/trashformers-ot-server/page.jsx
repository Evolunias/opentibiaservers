import TrashformersOtServerKeywordPage, { generateMetadata } from './trashformers-ot-server';

export { generateMetadata };
export const revalidate = 3600;

export default function Page() {
  return <TrashformersOtServerKeywordPage />;
}
